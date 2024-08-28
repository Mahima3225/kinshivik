import React from 'react'

export default function LoginForm() {
  return (
    <div>

        <form>

            <div>
                <input type="text" placeholder='Email address or phone number'/>
            </div>
            <div>
                <input type="password" placeholder='Password'/>
            </div>

            <div>
                <input type='submit' placeholder='Login' />
            </div>

        </form>
        


    </div>
  )
}
