/* eslint-disable prettier/prettier */
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
// import Colors from '../Utils/Colors';
import { Header, Icon } from 'react-native-elements';
import GlobalStyles from '../Utils/Global';
import { normalizeSize } from '../Utils/CommonFun';
import Colors from '../Utils/Colors';

const Layout = props => {
    const getBodyLayoutContent = () => (
        <View style={styles.container}>{props.children}</View>
    );

    const MiddleContent = (val) => {
        return (
            <View style={GlobalStyles.middleContainer}>
                <Text style={GlobalStyles.tHeaderTitle}>{val.title}</Text>
            </View>
        );
    };


    const LeftContent = (val) => {
        return (
         <View style={GlobalStyles.middleContainer}>
         <Icon
          name="chevron-thin-left" type="entypo"
          size={normalizeSize(20)} color={Colors.White}
          onPress={() => val.navigation.goBack()} />
         </View>
        );
    };


    const Footer = (val) => {
        return (
            <View style={GlobalStyles.footerCont}>
                <Text style={GlobalStyles.tHeaderTitle}>{val.footerTitle}</Text>
            </View>
        );
    };


    return (
        <SafeAreaView style={styles.container}>

            <Header
                leftComponent={props.showBack ? <LeftContent {...props} /> : null}
                containerStyle={GlobalStyles.containerHeader}
                centerContainerStyle={GlobalStyles.jcenter}
                centerComponent={<MiddleContent {...props} />}
            />

            <ScrollView persistentScrollbar={true} style={styles.container}>
                {getBodyLayoutContent()}
            </ScrollView>



            <Footer  {...props} />


        </SafeAreaView>
    );
};

export default Layout;

const styles = StyleSheet.create({
    container: { flex: 1 },
});
