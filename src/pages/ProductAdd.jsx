import { Formik, Form } from 'formik'
import React from 'react'
import { Button } from 'semantic-ui-react'
import * as Yup from 'yup'
import KodlamaIoTextInput from '../utilities/customFormControls/KodlamaIoTextInput'

export default function ProductAdd() {
    const initialValues = {
        productName: "",
        unitPrice: 10
    }

    const schema = Yup.object({
        productName: Yup.string().required("Ürün adı zorunlu"),
        unitPrice: Yup.number().required("Ürün fiyatı zorunlu"),
    })
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={(values) => { console.log(values) }}>
            <Form className='ui form'>
                <KodlamaIoTextInput name="productName" placeholder="Ürün Adı"/>
                <KodlamaIoTextInput name="unitPrice" placeholder="Ürün Fiyatı"/>
                <Button color='blue' type='submit'>Ekle</Button>
            </Form>
        </Formik>
    )
}
