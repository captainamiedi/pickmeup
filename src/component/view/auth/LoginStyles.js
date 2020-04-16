import styled from 'styled-components';

const Container = styled.View`
    flex: 1;
    backgroundColor: #fff;
    alignItems: center;
    justifyContent: center;
`;
const InputBox = styled.TextInput`
    width: 85%;
    margin: 10px;
    padding: 15px;
    fontSize: 16px;
    borderColor: #d3d3d3;
    borderBottomWidth: 1px;
    textAlign: center;
`;

const ButtonType = styled.TouchableOpacity`
    marginTop: 30px;
    marginBottom: 20px;
    paddingVertical: 5px;
    alignItems: center;
    backgroundColor: #F6820D;
    borderColor: #F6820D;
    borderWidth: 1px;
    borderRadius: 5px;
    width: 200px;
`;

const ButtonText = styled.Text`
    fontSize: 20px;
    fontWeight: bold;
    color: #fff;
`;
const ForgetButton = styled.TouchableOpacity`
    font-size: 15px;
    font-weight: 500;
    color: blue;
`;
const Button = styled.TouchableOpacity`
    marginTop: 30px;
    marginBottom: 20px;
    paddingVertical: 5px;
    alignItems: center;
    backgroundColor: #1B8BE0;
    borderRadius: 5px;
    width: 200px;
`;
export {Container, InputBox, ButtonType, ButtonText, Button, ForgetButton};
