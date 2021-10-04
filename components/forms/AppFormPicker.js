import React from "react";
import { useFormikContext } from "formik";

import AppPicker from "../AppPicker";
import ErrorMessages from "./ErrorMessages";
import { Text } from "react-native";

function AppFormPicker({
  items,
  numberOfColumns,
  name,
  placeholder,
  width,
  PickerItemComponent,
}) {
  const { errors, setFieldTouched, setFieldValue, touched, values } =
    useFormikContext();

  return (
    <>
      <AppPicker
        items={items}
        // onBlur={()=> setFieldTouched(name)}
        numberOfColumns={numberOfColumns}
        // onBlur={() => setFieldTouched(name)}
        onSelectItem={(item) => setFieldValue(name, item)}
        placeholder={placeholder}
        selectedItem={values[name]}
        PickerItemComponent={PickerItemComponent}
        width={width}
      />
      <ErrorMessages error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormPicker;
