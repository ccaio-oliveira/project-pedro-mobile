import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import globalStyles from './../../../global.styles';
import { useState } from "react";

export default function Login({ changeComponent }){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <View style={globalStyles.formElement}>
            <Text style={globalStyles.textLogin}>Acessar conta</Text>

            <View style={globalStyles.formGroupLogin}>
                <Text style={globalStyles.formLabelLogin}>E-mail</Text>
                <TextInput 
                    style={globalStyles.inputFormLogin} 
                    onChangeText={e => setEmail(e)}
                    defaultValue={email}
                />
            </View>

            <View style={globalStyles.formGroupLogin}>
                <Text style={globalStyles.formLabelLogin}>Senha</Text>
                <TextInput 
                    style={globalStyles.inputFormLogin} 
                    onChangeText={e => setPassword(e)}
                    secureTextEntry={true}
                    defaultValue={password}
                />
            </View>

            <View>
                <Pressable onPress={() => changeComponent('forgotPassword')}>
                    <Text>Esqueci minha senha</Text>
                </Pressable>

                <Pressable>
                    <Text>Entrar</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

})