import React, { useState } from 'react'
import { View,Button, TextInput,Header } from 'react-native'
// import { emailValidator } from '../helpers/emailValidator'
// import { sendEmailWithPassword } from '../api/auth-api'
// import Toast from '../components/Toast'
// import BackButton from '../components/BackButton'


const ResetPasswordScren = ({ navigation }) => {

    // const [email, setEmail] = useState({ value: '', error: '' })
    // const [loading, setLoading] = useState(false)
    // const [toast, setToast] = useState({ value: '', type: '' })

    // const sendResetPasswordEmail = async () => {
    //     const emailError = emailValidator(email.value)
    //     if (emailError) {
    //         setEmail({ ...email, error: emailError })
    //         return
    //     }
    //     setLoading(true)
    //     const response = await sendEmailWithPassword(email.value)
    //     if (response.error) {
    //         setToast({ type: 'error', message: response.error })
    //     } else {
    //         setToast({
    //             type: 'success',
    //             message: 'Email with password has been sent.',
    //         })
    //     }
    //     setLoading(false)
    // }
    return (
        <View>
            <BackButton goBack={navigation.goBack} />
            <Header>Restore Password</Header>
            <TextInput
                label="E-mail address"
                returnKeyType="done"
                value={email.value}
                onChangeText={(text) => setEmail({ value: text, error: '' })}
                error={!!email.error}
                errorText={email.error}
                autoCapitalize="none"
                autoCompleteType="email"
                textContentType="emailAddress"
                keyboardType="email-address"
                description="You will receive email with password reset link."
            />
            <Button
                loading={loading}
                mode="contained"
                onPress={sendResetPasswordEmail}
                style={{ marginTop: 16 }}
            >
                Send Instructions
            </Button>
            <Toast {...toast} onDismiss={() => setToast({ value: '', type: '' })} />
        </View>
    )
}

export default ResetPasswordScren