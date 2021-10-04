import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";
import * as Location from "expo-location";

import {
  AppForm,
  AppFormField,
  AppFormPicker,
  SubmitButton,
} from "../../components/forms";
import SafeAreaScreen from "../../components/SafeAreaScreen";
import CategoryPickerItem from "../../components/CategoryPickerItem";
import FormImagePicker from "../../components/forms/FormImagePicker";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
  images: Yup.array().min(1, "Please select at least one image."),
});

const category = [
  { label: "Furniture", value: 1, backgroundColor: "red", icon: "apps" },
  { label: "Clothing", value: 2, backgroundColor: "green", icon: "email" },
  { label: "Camera", value: 3, backgroundColor: "blue", icon: "lock" },
  {
    label: "Games",
    value: 4,
    backgroundColor: "orange",
    icon: "nintendo-game-boy",
  },
  {
    label: "Clothing",
    value: 5,
    backgroundColor: "#FF1493",
    icon: "shoe-heel",
  },
  { label: "Sport", value: 6, backgroundColor: "#008B8B", icon: "basketball" },
  {
    label: "Movies & Music",
    value: 7,
    backgroundColor: "#666699",
    icon: "headset",
  },
  {
    label: "Books",
    value: 8,
    backgroundColor: "#1B4D3E",
    icon: "book-open-variant",
  },
  {
    label: "Others",
    value: 9,
    backgroundColor: "#88540B",
    icon: "calendar-blank",
  },
];

function ListingEditScreen(props) {
  const [location, setLocation] = useState();

  const getLocation = async () => {
    const { granted} = await Location.requestForegroundPermissionsAsync();
    if(!granted) return;
    const { coords: { latitude, longitude } } = await Location.getLastKnownPositionAsync();
    setLocation({latitude, longitude});
  }
  useEffect(() => {
    getLocation();
  }, [])
  return (
    <SafeAreaScreen style={styles.container}>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
          images: [],
        }}
        onSubmit={(values) => console.log(location)}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="images" />
        <AppFormField maxLength={255} name="title" placeholder="Title" />
        <AppFormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
          width={120}
        />
        <AppFormPicker
          items={category}
          numberOfColumns={3}
          name="category"
          PickerItemComponent={CategoryPickerItem}
          placeholder="Category"
          width="50%"
        />
        <AppFormField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />
        <SubmitButton title="Post" />
      </AppForm>
    </SafeAreaScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default ListingEditScreen;
