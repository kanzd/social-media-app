import ProfileSide from "../../Components/profileSide/ProfileSide"
import RightSide from "../../Components/RightSide/RightSide"
import './Settings.css'

const Settings = () => {
    return (
        <div className="Settings">
            <h2 className="settings-heading">Settings Tab</h2>
            
            {/* Privacy And Account Visibility Card */}
            <div className="settings-section">
                <h3>Privacy And Account Visibility</h3>
                <ul>
                    <li>
                        <label>
                            <input type="checkbox" /> Make my profile private
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox" /> Hide my activity status
                        </label>
                    </li>
                </ul>
            </div>

            {/* Notification Preferences Card */}
            <div className="settings-section">
                <h3>Notification Preferences</h3>
                <ul>
                    <li>
                        <label>
                            <input type="checkbox" /> Enable dark mode
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox" /> Use compact layout
                        </label>
                    </li>
                </ul>
            </div>

            {/* Password and Account Security Card */}
            <div className="settings-section">
                <h3>Password and Account Security</h3>
                <ul>
                    <li>
                        <label>
                            <input type="checkbox" /> Change password
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox" /> Two-factor authentication
                        </label>
                    </li>
                </ul>
            </div>

            {/* Content Filtering and Parental Control Card */}
            <div className="settings-section">
                <h3>Content Filtering and Parental Control</h3>
                <ul>
                    <li>
                        <label>
                            <input type="checkbox" /> Enable content filtering
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox" /> Activate parental control
                        </label>
                    </li>
                </ul>
            </div>

            {/* Appearance Preferences Card */}
            <div className="settings-section">
                <h3>Appearance Preferences</h3>
                <ul>
                    <li>
                        <label>
                            <input type="checkbox" /> Enable dark mode
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox" /> Use compact layout
                        </label>
                    </li>
                </ul>
            </div>

            {/* Terms, Policies and Help Card */}
            <div className="settings-section">
                <h3>Terms, Policies and Help</h3>
                <ul>
                    <li>
                        <label>
                            <input type="checkbox" /> Accept terms and conditions
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox" /> Read our privacy policy
                        </label>
                    </li>
                </ul>
            </div>

            {/* Language and Region Settings Card */}
            <div className="settings-section">
                <h3>Language and Region Settings</h3>
                <ul>
                    <li>
                        <label>
                            <input type="checkbox" /> Set preferred language
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox" /> Set region information
                        </label>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Settings