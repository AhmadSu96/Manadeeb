import React, { useState, useRef } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  TouchableOpacity,
  Text,
} from "react-native";
import PhoneInput from "react-native-phone-number-input";
import { Colors } from "react-native/Libraries/NewAppScreen";
 
const App: React.FC = () => {
  const [value, setValue] = useState("");
  const [formattedValue, setFormattedValue] = useState("");
  const [valid, setValid] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  // const phoneInput = useRef<PhoneInput>(null);
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={{width:"100%"}}>
        {/* <SafeAreaView >
          {showMessage && (
            <View >
              <Text>Value : {value}</Text>
              <Text>Formatted Value : {formattedValue}</Text>
              <Text>Valid : {valid ? "true" : "false"}</Text>
            </View>
          )} */}
          <PhoneInput
            // ref={phoneInput}
            defaultValue={value}
            defaultCode="QA"
            onChangeText={(text) => {
              setValue(text);
            }}
            // onChangeFormattedText={(text) => {
            //   setFormattedValue(text);
            // }}
            containerStyle={{width:"100%",height:70}}
            
            withShadow
          />
          {/* <TouchableOpacity
            onPress={() => {
              const checkValid = phoneInput.current?.isValidNumber(value);
              setShowMessage(true);
              setValid(checkValid ? checkValid : false);
            }} 
          >
            <Text>Check</Text>
          </TouchableOpacity>
        </SafeAreaView>*/}
      </View>
    </>
  );
};
 
export default App;