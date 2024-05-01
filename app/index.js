import { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Login from "../src/screens/Login/Login";

export default function Page() {
    const [activeComponent, setActiveComponent] = useState('login');

    const handleComponent = (component) => {
        setActiveComponent(component);
    }

    return (
        <View style={styles.loginElement}>
            <View style={styles.topElement}>
                <Image source={require('../assets/images/medicine2.png')} style={styles.imgElement} />
                <View style={styles.textElement}>
                    <Text style={styles.textH1}>Se conecte com sua equipe e salve vidas!</Text>
                    <Text style={styles.textP}>Mande solicitações de relatórios, agende consultas e gerencie o seu tempo.</Text>
                </View>
            </View>

            <View style={styles.bottomElement}>
                {activeComponent === 'login' ? <Login changeComponent={handleComponent} /> : null}

                <View style={styles.rights}>
                    <Text style={styles.rightsText}>
                        Spectrus © 2024 - Todos os direitos reservados
                    </Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    loginElement: {
        flex: 1,
        marginTop: 30
    },
    topElement: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    imgElement: {
        width: 350,
        height: 250,
    },
    textElement: {
        marginTop: 20,
        width: '80%',
        textAlign: 'center',
    },
    textH1: {
        fontWeight: '400',
        fontSize: 20,
        textAlign: 'center',
    },
    textP: {
        marginTop: 10,
        fontWeight: '500',
        textAlign: 'center',
        fontSize: 15,
    },
    bottomElement: {
        flex: 1,
        backgroundColor: '#164863',
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: 17,
        borderTopRightRadius: 17 
    },
    rights: {
        marginTop: 30,
    },
    rightsText: {
        color: '#D9D5D5',
        textAlign: 'center',
    }
})