import React from "react";
import { useFormikContext } from "formik";

import ErrorMessages from "./ErrorMessages";
import ImageInputList from "../ImageInputList";

function FormImagePicker({name}) {
  const { errors, setFieldTouched, setFieldValue, touched, values } =
    useFormikContext();

    const imageUris = values[name];

    const handleAdd = (uri) => {
        setFieldValue(name, [...imageUris, uri]);
      };
    
      const handleRemove = (uri) => {
        setFieldValue(name, imageUris.filter((imageUri) => imageUri !== uri));
      };

  return (
    <>
      <ImageInputList
       onAddImage={handleAdd}
       onRemoveImage={handleRemove} imageUris={imageUris} />
      <ErrorMessages error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default FormImagePicker;
