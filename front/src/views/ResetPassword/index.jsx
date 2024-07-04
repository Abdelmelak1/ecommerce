import Button from "../../components/Button"
import PasswordInput from "../../components/PasswordInput"
import Alert from "../../components/Alert"
import { useState } from 'react'
import axios from '../../config/axios'
import { apis } from '../../config/apisUrls'
import { useParams } from 'react-router-dom'

export default () => {

    const [passwrods, setpasswrods] = useState({
        password: '',
        confirm: ''
    })

    const handlepasses = e => {
        let { name, value } = e.target

        setpasswrods(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const { token } = useParams()

    const [errors, seterrors] = useState([])

    const [success, setsuccess] = useState(false)


    const reset = () => {
        seterrors([])
        axios.post(apis.users.reset + token, passwrods)
            .then(res => {
                console.log(res);
                if (res.status === 200) {
                    setsuccess(true)
                }
            })
            .catch(err => {
                console.log(err.response);
                if (err.response.status === 422) {
                    seterrors(err.response.data.errors.details)
                }
            })
    }

    return (
        <>
            <div className="container">
                <div className="row justify-content-center  mt-5 ">

                    <div className="col-md-5 col-sm-12 forget">
                        <h4>Reset Passsword</h4>

                        {
                            !success
                                ?
                                <>
                                    <span>type a new password</span>
                                    <br />
                                    <br />
                                    <PasswordInput errors={errors} onWrite={handlepasses} name='password' />
                                    <br />
                                    <PasswordInput errors={errors} onWrite={handlepasses} name='confirm' />
                                    <br />
                                    <div style={{ display: "flex", justifyContent: 'center' }} >
                                        <Button Click={reset} text='Reset' />
                                    </div>
                                </>
                                :
                                <>
                                    <Alert type='success' message="password has been successfuly reset" />
                                    <div style={{ dispaly: 'flex', justifyContent: 'center' , alignItems:'center' }}  >
                                        <Button text='login' />
                                    </div>
                                </>
                        }

                    </div>

                </div>
            </div>

        </>
    )
}
