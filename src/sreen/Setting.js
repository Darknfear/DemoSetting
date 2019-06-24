import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import { View ,Text,Container,Label} from 'native-base';
import { TextInput } from 'react-native-gesture-handler';
export default class Setting extends Component{
    render(){
        return(
            <Container style = {styles.container}>
                <View style = {styles.stylesView}>
                    <Text style = {styles.stylesTextOne}>Cài đặt</Text>
                </View>
                <View>
                    <Text style = {styles.stylesTextTwo} > Thông tin người dùng</Text>
                </View>
                <View>
                    <Text style = {styles.stylesTextThree} > Tài khoản người dùng</Text>
                </View>
                <View flexDirection = 'row' style = {{height : 45}}>
                    <Label style = {{marginTop : 10,marginLeft : 25}}>Họ và tên :</Label>
                    <TextInput placeholder = "Họ và tên"  style = {styles.stylesTextinput}></TextInput>
                </View>
            </Container>
        );
    }
}
const styles = StyleSheet.create({
    container : {
        flex : 1
    },
    stylesView : {
        height : 40,
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : "blue"
    },
    stylesTextOne : {
        fontSize : 25,
        color : 'white',
        margin : 20
    },
    stylesTextTwo : {
        fontSize : 22,
        fontStyle : 'normal',
        color : "black",
        marginTop : 40,
        marginLeft : 20
    },
    stylesTextThree : {
        fontSize : 20,
        fontStyle : 'normal',
        marginLeft : 20,
        marginTop : 10,
        color : "gray"

    },
    stylesTextinput : {
        marginTop : 10,
        marginLeft : 10,
        borderWidth : 1,
        marginRight : 20,
        fontSize : 15,
        flex : 1
    

    }
})