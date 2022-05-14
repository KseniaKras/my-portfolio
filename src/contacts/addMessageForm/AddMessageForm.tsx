import React, {FC} from "react";
import s from "./AddMessageForm.module.scss";
import {DataType, formAPI} from "../../api/API";
import {useFormik} from "formik";
import {Button} from "../../common/button/Button";


type AddMessageFormPropsType = {
    changeFormView: (value: boolean) => void
}
export const AddMessageForm :FC<AddMessageFormPropsType> = ({changeFormView}) => {

    async function send(data: DataType) {
        await formAPI.sendMessage(data).then(() => {
            changeFormView(true)
        })
    }

    const formik = useFormik({
        initialValues: {
            name: '',
            phone: '',
            email: '',
            subject: '',
            textMessage: '',
        },
        onSubmit: values => {
            send(values)
        },
    });

    return (
        <form onSubmit={formik.handleSubmit} className={s.forms}>
            <input
                id="name"
                name="name"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.name}
                className={s.input}
                placeholder={'Name'}
            />
            <input
                id="phone"
                name="phone"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.phone}
                className={s.input}
                placeholder={'Phone'}
            />
            <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                className={s.input}
                placeholder={'Email'}
            />
            <input
                id="subject"
                name="subject"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.subject}
                className={s.input}
                placeholder={'Subject'}
            />
            <textarea
                id="textMessage"
                name="textMessage"
                onChange={formik.handleChange}
                value={formik.values.textMessage}
                className={s.inputMessage}
                placeholder={'Your Message'}
            />
            <div className={s.submitBtn}>
                <Button type="submit" name={'Send'} callback={()=>{}}/>
            </div>
        </form>
    )
}

