import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import {
  AppForm,
  AppFormField,
  AppFormPicker,
  SubmitButton,
} from "../../components/forms";
import SafeAreaScreen from "../../components/SafeAreaScreen";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().min(1).label("Name"),
  email: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
});

{/* <MaterialCommunityIcons name="account" size={24} color="black" /> */}
function RegisterScreen(props) {
  return (
    <SafeAreaScreen style={styles.container}>
      <AppForm
        initialValues={{
          name: "",
          email: "",
          description: "",
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField 
        icon="account"
         maxLength={255} name="name" placeholder="Name" />
        <AppFormField
          keyboardType="numeric"
          maxLength={8}
          icon="email"
          name="email"
          placeholder="Email"
        />
        <AppFormField
        icon="lock"
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />
        <SubmitButton title="Register" />
      </AppForm>
    </SafeAreaScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default RegisterScreen;
