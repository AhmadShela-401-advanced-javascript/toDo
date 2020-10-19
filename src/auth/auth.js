'use strict';
import React, { useState } from 'react';
import base64 from 'base-64';

const useAuth = (callback) => {

    const [values, setValues] = useState({});
    var todoAPI = 'http://localhost:4000/api/v1/user/signin'

    const setCookie = (cname, cvalue) => {
        var d = new Date();
        d.setTime(d.getTime() + (1 * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    function getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }
    const handleBearerAuth = (token) => {
        var authData = `Bearer ${getCookie('token')}`
        console.log('authData', authData);
        var body = {}
        fetch(todoAPI, {
            method: 'post',
            mode: 'cors',
            cache: 'no-cache',
            headers: { 'Authorization': authData },
            body: JSON.stringify(body)
        })
            .then(response => {
                console.log(response);
                response.json()
                if (response.status == 200) {
                    callback()
                }
            })
            .then(savedItem => {
                // setList([...list, savedItem])
                //   props.changeSignStatus(1)
            })
            .catch(console.error);
    }
        const handleBasicAuth = (name, pass) => {
        console.log("Generic BasicAuth Handler!!####### !! ");
        // callback(values);
        var input = `${name}:${pass}`;
        var encodedData = base64.encode(input);
        encodedData = `Basic ${encodedData}`
        console.log(`${encodedData} ==> ${input}`);
        fetch(todoAPI, {
            method: 'post',
            mode: 'cors',
            cache: 'no-cache',
            headers: { 'Authorization': encodedData },
            body: JSON.stringify({ name, pass })
        })
            .then(response => {
                response.json()
                console.log(response.headers);
                if (response.status == 200) {
                    // setCookie(response.)
                    callback()
                }
            })
            .then(savedItem => {
                // setList([...list, savedItem])
                //   props.changeSignStatus(1)
            })
            .catch(console.error);
    }

    return [handleBasicAuth, handleBearerAuth, values];

}

export default useAuth;