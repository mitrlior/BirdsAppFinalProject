import React, { useState, useEffect, useRef } from "react";
import { Text, View, SafeAreaView, Image } from "react-native";
import { Camera, CameraType } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import * as ImagePicker from "expo-image-picker";
import CamButton from "../assets/utils/CameraButtons";
import { cameraStyle } from "../assets/AppStyles";
import { post_file, _send } from "../requests/filesRequests";
import * as FileSystem from "expo-file-system";

export default function RecognizeScreen({ navigation }) {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [image, setImage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
  const cameraRef = useRef(null);
  const [galleryImage, setGalleryImage] = useState(null);

  useEffect(() => {
    (async () => {
      MediaLibrary.requestPermissionsAsync();
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === "granted");
    })();
  }, []);

  const takePicture = async () => {
    if (cameraRef) {
      try {
        const data = await cameraRef.current.takePictureAsync();
        console.log(data);
        setImage(data.uri);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const savePicture = async () => {
    if (image) {
      try {
        // const asset = await MediaLibrary.createAssetAsync(image);
        // alert("Picture saved! 🎉");
        console.log("saved successfully");
        console.log(`image = ${image}`);
        await _send(image);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const send = async () => {
    if (image) {
      try {
        console.log(image);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const pickGalleryImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);
    if (!result.cancelled) {
      setGalleryImage(result.uri);
    }
  };

  if (hasCameraPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <SafeAreaView style={cameraStyle.container}>
      {!image ? (
        <Camera
          style={cameraStyle.default}
          type={type}
          flashMode={flash}
          ref={cameraRef}
        >
          <View style={cameraStyle.in_camera}>
            <CamButton
              icon={"retweet"}
              onPress={() => {
                setType(
                  type === CameraType.back ? CameraType.front : CameraType.back
                );
              }}
            />
            <CamButton
              icon={"flash"}
              color={
                flash === Camera.Constants.FlashMode.off ? "gray" : "#f1f1f1"
              }
              onPress={() => {
                setFlash(
                  flash === Camera.Constants.FlashMode.off
                    ? Camera.Constants.FlashMode.on
                    : Camera.Constants.FlashMode.off
                );
              }}
            />
          </View>
        </Camera>
      ) : (
        <Image source={{ uri: image }} style={cameraStyle.default} />
      )}
      <View>
        {image ? (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 50,
            }}
          >
            <CamButton
              title={"Re-take"}
              icon="retweet"
              onPress={() => setImage(null)}
            />
            <CamButton title={"Save"} icon="check" onPress={savePicture} />
          </View>
        ) : (
          <View>
            <CamButton
              title="Take a picture"
              onPress={takePicture}
              icon="camera"
            />
            <CamButton
              title="Pick gallery picture"
              onPress={pickGalleryImage}
              icon="image"
            />
            {galleryImage && (
              <Image
                source={{ uri: galleryImage }}
                style={{ width: 10, height: 10 }}
              />
            )}
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}
