import React from 'react';
import RNPickerSelect from 'react-native-picker-select';
import { Alert, Button, Image, ScrollView, Text, View, StyleSheet } from 'react-native';

const MyApp = () => {

    const [name1, setName1] = React.useState('');
    const [name2, setName2] = React.useState('');
    const [name3, setName3] = React.useState('');

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Animal Quiz</Text>
            </View>

            <View style={styles.quizContainer}>
                <Image
                    key="rabbit"
                    source={require('./img/rabbit.jpg')}
                    style={styles.image}
                />
                <Text>1. What animal is this?</Text>
                <RNPickerSelect
                    onValueChange={(value) => setName1(value)}
                    items={[
                        { label: 'hummingbird', value: 'hummingbird' },
                        { label: 'deer', value: 'deer' },
                        { label: 'rabbit', value: 'rabbit' }
                    ]}
                />

                <Image
                    key="penguin"
                    source={require('./img/penguin.jpg')}
                    style={styles.image}
                />
                <Text>2. What animal is this?</Text>
                <RNPickerSelect
                    onValueChange={(value) => setName2(value)}
                    items={[
                        { label: 'penguin', value: 'penguin' },
                        { label: 'kingfisher', value: 'kingfisher' },
                        { label: 'peacock', value: 'peacock' }
                    ]}
                />

                <Image
                    key="bee"
                    source={require('./img/bee.jpg')}
                    style={styles.image}
                />
                <Text>3. What animal is this?</Text>
                <RNPickerSelect
                    onValueChange={(value) => setName3(value)}
                    items={[
                        { label: 'owl', value: 'owl' },
                        { label: 'bee', value: 'bee' },
                        { label: 'squirrel', value: 'squirrel' }
                    ]}
                />

                <Button onPress={() => {
                    const CorrectAns1 = 'rabbit';
                    const CorrectAns2 = 'penguin';
                    const CorrectAns3 = 'bee';
                    let num = 0;
                    let score = 0;
                    let message = '';

                    if (name1 === CorrectAns1) {
                        score += 1;
                        num += 1;
                    }

                    if (name2 === CorrectAns2) {
                        score += 1;
                        num += 1;
                    }

                    if (name3 === CorrectAns3) {
                        score += 1;
                        num += 1;
                    }

                    if (score === 3) {
                        message = `You have scored ${num} out of 3! Excellent work! You’re an animal expert! 🥇`;
                    } else if (score === 2) {
                        message = `You have scored ${num} out of 3! Great job! Just a little more practice.. 👍`;
                    } else if (score === 1) {
                        message = `You have scored ${num} out of 3. Not bad, keep learning and you’ll get there! 😊`;
                    } else {
                        message = `You have scored ${num} out of 3... don't worry, try again and you’ll nail it! 🐢`;
                    }

                    Alert.alert(message);
                }} title="Submit Answers" />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingBottom: 20,
        backgroundColor: '#F8F8F8'
    },
    header: {
        backgroundColor: '#333',
        paddingVertical: 15,
        alignItems: 'center'
    },
    headerText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold'
    },
    quizContainer: {
        padding: 20
    },
    image: {
        width: 200,
        height: 150,
        borderRadius: 10,
        resizeMode: 'contain',
        marginVertical: 10
    }
});

export default MyApp;
