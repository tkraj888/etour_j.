import React from 'react'
import './FormatPass.css'


const ForgetPass = () => {
  return (
    <div className="containerr" >
  <div className="row" style={{ marginTop: 10 }}>
    <div className="col-sm-12">
      <div className="horizontal-containerr">
        <div className="horizontal-formm-boxx">
          <div className="horizontal-info-containerr text-center">
            {/* <img src="https://static.stayjapan.com/assets/top/icon/values-7dd5c8966d7a6bf57dc4bcd11b2156e82a4fd0da94a26aecb560b6949efad2be.svg" /> */}
            <p className="horizontal-heading">Reset your password</p>
            <p className="horizontal-subtitle">
              Your password needs to be at least 8 characters.
            </p>
          </div>
          <formm className="horizontal-formm">
            <div className="o3-formm-group">
              <label htmlFor="new_password">New password</label>
              <input
                type="password"
                className="o3-formm-control o3-input-lg"
                id="new_password"
              />
            </div>
            <div className="o3-formm-group">
              <label htmlFor="confirm_password">Confirm new password</label>
              <input
                type="password"
                className="o3-formm-control o3-input-lg"
                id="confirm_password"
              />
            </div>
            <div className="Signup-button">
                <button type="submit button" class="btn btn-outline-primary">
                  Reset Password
                </button>
              </div>
          </formm>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default ForgetPass