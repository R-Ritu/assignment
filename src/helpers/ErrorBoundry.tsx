import React, { ErrorInfo } from 'react';
import { Linking, StyleSheet, Text, View } from 'react-native';

interface Props{

}

interface State{
  hasError?:boolean
}

class ErrorBoundary extends React.Component<Props,State> {
  constructor(props:Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_error:Error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(_error:Error, _errorInfo:ErrorInfo) {
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, errorInfo);
  }

  handleConnect = () => {
    try {
      Linking.openURL('mailto:support@example.com?subject=SendMail&body=Description');
    } catch (e: any) {
      console.warn(e);
    }

  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <View style={style.container}>
        <Text style={style.text}>
          Something went wrong.</Text>
        <Text style={style.connect}>
          Please <Text style={style.link} onPress={this.handleConnect}>click</Text> to connect With Us if error persist.
        </Text>
      </View>;
    }

    return this.props.children;
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
  },
  text: {
    fontSize: 15,
    color: 'grey',
    letterSpacing:2,
  },
  connect: {
    color: 'black',
    letterSpacing: 2,
    justifyContent: 'center',
    textAlign: 'center',
    margin:10,
  },
  link: {
    color:'blue',
  },
});

export default ErrorBoundary;
