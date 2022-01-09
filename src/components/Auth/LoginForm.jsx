import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, Button } from 'react-native'
import { useFormik } from 'formik';
import { object, string } from 'yup';
import { user, userDetails } from '../../utils/userDB';
import useAuth from '../../Hooks/useAuth';

export default function LoginForm() {
    const [error, setError] = useState('')
    const { login } = useAuth();

    const formik = useFormik({
        initialValues,
        validationSchema: formSchema(),
        onSubmit: ({ username, password }) => {
            try {
                setError('');
                if (username !== user.userName || password !== user.password)
                    throw { message: 'nombre de usuario o contraseña incorrecto' }

                login(userDetails)
            } catch (error) {
                setError(error.message)
            }
        },
    })

    return (
        <View>
            <Text style={styles.title}>Inciar sesión</Text>
            <TextInput
                placeholder='Nombre de usuario'
                style={styles.input}
                autoCapitalize='none'
                value={formik.values.username}
                onChangeText={(value) => formik.setFieldValue('username', value)}
            />
            <TextInput
                placeholder='Contraseña'
                style={styles.input}
                autoCapitalize='none'
                secureTextEntry={true}
                value={formik.values.password}
                onChangeText={(value) => formik.setFieldValue('password', value)}
            />
            <Button
                title='Inciar sessión'
                onPress={(formik.handleSubmit)}
            />

            <Text style={styles.error}>{formik.errors.username}</Text>
            <Text style={styles.error}>{formik.errors.password}</Text>

            <Text style={styles.error}>{error}</Text>

        </View>
    )
}

const initialValues = {
    username: '',
    password: ''
}

const formSchema = () => object({
    username: string().required('El nombre de usuario es requerido'),
    password: string().required('La contraseña es requerido')
})

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        fontSize: 28,
        marginTop: 50,
        marginBottom: 15,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10
    },
    error: {
        textAlign: 'center',
        color: 'red',
        marginTop: 20
    }
})
