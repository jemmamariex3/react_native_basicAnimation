/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    View,
    Animated,
    Dimensions,
    Easing
} from 'react-native';

const {width,height} = Dimensions.get('window')

export default class App extends Component {

    constructor(){
        super()

        this.state = {
            animateSize: new Animated.Value(30),//Animated.Value/ValueXY used to hook up animation attributes, also for single values
            animateRadius : new Animated.Value(0),
            animateXY: new Animated.ValueXY({x: (height-width)/3, y:height/2})
        }
    }

    componentWillMount(){
        //called when an instance of a component is being created and inserted into the DOM
        Animated.sequence([
            Animated.parallel([
                Animated.timing(
                    this.state.animateSize,
                    {
                        toValue: 150,
                        duration: 2000,
                    }
                ),
                Animated.timing(
                    this.state.animateRadius,{
                        toValue: 100,
                        duration:2000
                    }
                ),

            ]),


        ]).start()

    }
  render() {
    return (
        <View>
            <Animated.View
                style={
                    {
                        width: 30,
                        height: 30,
                        backgroundColor: "teal",
                        width: this.state.animateSize,
                        height:this.state.animateSize,
                        top:this.state.animateXY.y,
                        left:this.state.animateXY.x,
                        borderRadius:this.state.animateRadius,

                    }
                }
            />
        </View>

    );
  }
}
