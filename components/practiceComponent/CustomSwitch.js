import React, { useState } from "react";
import { Switch } from "react-native";

import SafeAreaScreen from "../SafeAreaScreen";
import colors from "../../app/config/colors";

function CustomSwitch(props) {
  const [isNew, setIsNew] = useState(false);
  return (
    <SafeAreaScreen>
      <Switch value={isNew} onValueChange={(newValue) => setIsNew(newValue)} />
      <Switch
        value={isNew}
        onValueChange={(newValue) => setIsNew(newValue)}
        disabled
      />
       <Switch
        value={isNew}
        onValueChange={(newValue) => setIsNew(newValue)}
        ios_backgroundColor={colors.danger}
      />
       <Switch
        value={isNew}
        onValueChange={(newValue) => setIsNew(newValue)}
        thumbColor={colors.danger}
      />
       <Switch
        value={isNew}
        onValueChange={(newValue) => setIsNew(newValue)}
        trackColor={colors.danger}
      />
    </SafeAreaScreen>
  );
}

export default CustomSwitch;
