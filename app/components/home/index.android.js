import React, { Component, Fragment } from "react";
import {Layout, Text, View, Image, TouchableOpacity, ToastAndroid} from "react-native";
import styles from "./styleSheet";
import data from "../../data/index.json";


class Home extends Component {

  constructor(props){
    super(props);

    this.data = data;
    this.totalQuestions = this.data.length;

    // Initalising Component State
    this.state = { 
      currentScreenIndex: 0,
      currentScreenData : this.getCurrentScreenData(),
      exitScreen: false,
      selectedOption: ""
    }
  }


  // Return the data of INITIAL INDEX of array if new Index is not passed in as an rrgument
  getCurrentScreenData = newIndex => newIndex ? this.data[newIndex] : this.data[0];

  // Simple React Native Toast 
  showToast = message => ToastAndroid.showWithGravity(message, ToastAndroid.SHORT, ToastAndroid.CENTER);

  // Change Current Selected Option
  onSelectOption = selectedOption => this.setState({selectedOption});

  // Reset State to Initial Values
  onPressResetButton = () => {
    this.setState({
      selectedOption: "",
      currentScreenIndex: 0,
      currentScreenData : this.getCurrentScreenData(),
      exitScreen: false
    })
  }

  /*
    Decide the next screen 
    If Selected Option is not the correct shows message
  */
  onPressCheck = () => {
    let { selectedOption, correctAnswer } = { ...this.state, ...this.state.currentScreenData };
    if (selectedOption === correctAnswer) {
      this.showToast("Correct Answer");
      let { currentScreenIndex : index } = this.state;
      ++index;
      if (this.totalQuestions === index) {
        this.setState({
          exitScreen: true
        });
      } else{
        let currentScreenData = this.getCurrentScreenData(index);
        this.setState({
          currentScreenIndex : index,
          selectedOption: "",
          currentScreenData
        });
      }
    } else {
      this.showToast("Incorrect Answer");
    }
  }

  // Return JSX view of Question 
  renderQuestion = () => (
    <View style={styles.question_container}>
      <Text style={styles.question_text}>{this.state.currentScreenData.question}</Text>
    </View>
  )
 
  // Map through all options of the current Question
  renderOptions = () => {
    let { options } = this.state.currentScreenData;
    return(
      <View style={styles.options_container}>
        {
          options.map((option, index) => (
            <TouchableOpacity key={index} onPress={this.onSelectOption.bind(this, option.text)}>
              <View style={[styles.option_box, {opacity: this.state.selectedOption === option.text ? 0.3 : 1} ]}>
                <View style={styles.option_text_container}>
                  <Text style={styles.option_text}>{option.text}</Text>
                </View>
                <Image 
                  style={styles.option_image} 
                  resizeMode={'cover'} 
                  source={{uri: option.imageUrl}} 
                />
              </View>
            </TouchableOpacity>
          ))
        }
      </View>
    )
  }

  // Return JSX for "Check Answer" Button
  renderCheckButton = () => (
    <TouchableOpacity 
      onPress = {() => this.onPressCheck()} 
      disabled={this.state.selectedOption === "" && true}
      style={
          [styles.check_button_container, {opacity: this.state.selectedOption !== "" ? 1 : 0.3}]
        }
      >
      <Text style={styles.check_button_text}>Check Answer</Text>
    </TouchableOpacity>
  )

  // Render Reset Button to change all state values to Initials
  renderResetButton = () => (
    <View style={styles.reset_button_container}>
      <Text style={styles.reset_button} onPress={() => this.onPressResetButton()}>
        Click To Attempt Again
      </Text>
    </View>
  ) 

  // Render Navar for Question and Last Screen
  renderNavbar = (currentQuestionNumber, exitScreen) => (
    <Text style={styles.head_text}>
      {
        exitScreen ?
          "ThankYou for giving Quiz"
        :
          `Quiestion ${currentQuestionNumber} of ${this.totalQuestions}` 
      }
    </Text>
  )

  // Main Render Method
  render() {
    let currentQuestionNumber = this.state.currentScreenIndex + 1;
    let { exitScreen } = this.state;
    return (
      <View style={styles.app_container}>
        {this.renderNavbar(currentQuestionNumber, exitScreen)}
        <View style={styles.question_panel}>
          {
            !exitScreen ?
              <Fragment>
                {this.renderQuestion()}
                {this.renderOptions()}
              </Fragment>
            :
              <Fragment>
                {this.renderResetButton()} 
              </Fragment>
          }
        </View>
        {
          !exitScreen &&
            this.renderCheckButton()
        }
      </View>  
    );
  }
}

export default Home;