import { Button, CssBaseline, TextField, Typography, Link, Grid, Container } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import useStyles from './styles'
import { useContext } from 'react';
import { AppContext } from '../../context';
const Register = () => {
    const classes = useStyles()
    const [loading, setLoading] = useState(false)
    const [signup, setSignup] = useState(true)
    const [form, setForm] = useState({ firstName: '', lastName: '', password: '', password2: '', email: '' })
    const [errors, setErrors] = useState({})
    const [click, setClick] = useState(0)
    const formControl = (e) => {
        const { name, value } = e.target
        setForm((prev) => { return ({ ...prev, [name]: value }) })
    }
    const formSubmit = (e) => {
        const { password, password2, email, firstName, lastName } = form
        setErrors(null)
        e.preventDefault()
        if (!firstName.trim() && (signup)) {
            setErrors((prev) => { return ({ ...prev, firstName: 'First Name is Required' }) })
        }
        if (!lastName.trim() && (signup)) {
            setErrors((prev) => { return ({ ...prev, lastName: 'Last Name is Required' }) })
        }
        if (!email) {
            setErrors((prev) => { return ({ ...prev, email: 'Email is Required' }) })
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            setErrors((prev) => { return ({ ...prev, email: 'Email address is invalid' }) })
        }
        if (!password) {
            setErrors((prev) => { return ({ ...prev, password: 'Password is required' }) })
        } else if (password.length < 6) {
            setErrors((prev) => { return ({ ...prev, password: 'Password must be of minimum 6 characters' }) })
        }
        
        if (!password2 && (signup)) {
            setErrors((prev) => { return ({ ...prev, password2: 'Password is required' }) })
        } else if (password2 !== password && (signup)) {
            setErrors((prev) => { return ({ ...prev, password2: 'Passwords do not match' }) })
        }
    }
    const [didMount, setDidMount] = useState(false)
    const { changeLogin,changeName,changeBio } = useContext(AppContext)
    useEffect(() => { setDidMount(true) }, [])
    const signUp=async()=>{
        setLoading(true)
        const res=await fetch("https://news-app-backendd.herokuapp.com/signup",{
            headers: {
                'Content-Type': 'application/json'
              },
            method:'POST',
            body:JSON.stringify({firstName: form.firstName, lastName: form.lastName, password: form.password,  email: form.email})
        })
        const result=await res.json()
        if (!result.token) {
            setErrors({password2:result.message})
        }
        else{
            localStorage.setItem('token',result?.token)
            localStorage.setItem('name',result?.name)
            localStorage.setItem('bio',result?.bio)
            changeBio(result?.bio)
            changeName(result?.name)
            changeLogin(true)
        }
        setLoading(false)
    }
    const signIn=async()=>{
        setLoading(true)
        const res=await fetch("https://news-app-backendd.herokuapp.com/signin",{
            headers: {
                'Content-Type': 'application/json'
            },
            method:'POST',
            body:JSON.stringify({ password: form.password,  email: form.email})
        })
        const result=await res.json()
        if (!result.token) {
            setErrors({password:result.message})
        }
        else{
            // console.log(result);
            localStorage.setItem('token',result?.token)
            localStorage.setItem('name',result?.name)
            localStorage.setItem('bio',result?.bio)
            changeBio(result?.bio)
            changeName(result?.name)
            changeLogin(true)
        }
        setLoading(false)
    }
    useEffect(() => {
        if(didMount&&!errors&&signup){
            signUp()
        }
        if(didMount&&!errors&&!signup){
            signIn()
        }
    }, [errors,click])
    return (

        <div className={classes.cover}>
            <CssBaseline />
            <Container maxWidth="sm" className={classes.container}>
                <Typography component="h1" variant="h4" align="center" className={classes.heading}>
                    {signup ? "Sign Up" : "Login"}
                </Typography>
                <form onSubmit={formSubmit}>
                    {signup && <Grid container spacing={2} className={classes.grid}>
                        <Grid item xs={12} sm={6}>
                            <TextField name="firstName" variant="outlined" fullWidth id="firstName" label="First Name *" autoFocus onChange={formControl} value={form.firstName}
                            />
                            <Typography color="secondary">
                                {errors?.firstName && errors.firstName}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField variant="outlined" fullWidth id="lastName" label="Last Name *" name="lastName" onChange={formControl} value={form.lastName}
                            />
                            <Typography color="secondary">
                                {errors?.lastName && errors.lastName}
                            </Typography>
                        </Grid>
                    </Grid>}

                    <TextField variant="outlined" margin="normal" fullWidth id="email" label="Email Address *" name="email" onChange={formControl} value={form.email}
                    />
                    <Typography color="secondary">
                        {errors?.email && errors.email}
                    </Typography>
                    <TextField variant="outlined" margin="normal" fullWidth name="password" label="Password *" type="password" id="password" onChange={formControl} value={form.password}
                    />
                    <Typography color="secondary">
                        {errors?.password && errors.password}
                    </Typography>
                    {
                        signup && <><TextField variant="outlined" margin="normal" fullWidth name="password2" label="Confirm Password *" type="password" id="password2" onChange={formControl} value={form.password2}
                        />
                            <Typography color="secondary">
                                {errors?.password2 && errors.password2}
                            </Typography> </>
                    }

                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.button}  onClick={()=>{setClick(prev=>prev+1)}} disabled={loading}
                    >
                        {loading?'Please Wait...':(signup ? "SIGN UP" : "LOGIN")}
                    </Button>
                    <Link href="#" variant="body2" component="div" align="center" className={classes.link} onClick={() => { setSignup((prev) => { return (!prev) });setErrors({}) ; setForm({ firstName: '', lastName: '', password: '', password2: '', email: '' }) }}>
                        {signup ? "Already have an account? Login" : "Don't have an account? Sign Up"}
                    </Link>

                </form>
            </Container>
        </div>
    )
}

export default Register
