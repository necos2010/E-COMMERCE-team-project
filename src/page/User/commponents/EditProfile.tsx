import { useState } from 'react';
import './EditProfile.css';


const EditProfile = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState<string | null>(null);

    const letterOnly = (setter: (value: string) => void) => (e: React.ChangeEvent<HTMLInputElement>) => {
        const onlyLetters = e.target.value.replace(/[^a-zA-Z]/g, '');
        setter(onlyLetters);
    };

    const emailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const addressHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const clean = e.target.value.replace(/[^a-zA-Z0-9\s,.\-']/g, '');
        setAddress(clean);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (newPassword && newPassword !== confirmPassword) {
            alert("New password and confirmation do not match.");
            return;
        }

        let finalEmail = email;
        if (!email.endsWith("@gmail.com")) {
            finalEmail = email.replace(/@.*/, "") + "@gmail.com";
        }

        setErrors(null);

        const formData = {
            firstName,
            lastName,
            email: finalEmail,
            address,
            currentPassword,
            newPassword,
        };

        console.log("Submitted Data:", formData);
        // TODO: send to backend
    };
    return (
        <div className='container'>
            <div className="profile-form">
                <h1>Edit Your Profile</h1>
                <form className="form-grid" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="firstName">First Name</label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            placeholder='MD'
                            value={firstName}
                            onChange={letterOnly(setFirstName)}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="lastName">Last Name</label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            placeholder="Rimel"
                            value={lastName}
                            onChange={letterOnly(setLastName)}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            placeholder="rimell111@gmail.com"
                            value={email}
                            onChange={emailHandler}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="address">Address</label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            placeholder="Kingston, 5236, United State"
                            value={address}
                            onChange={addressHandler}
                        />
                    </div>

                    <h2 className="full-width">Password Changes</h2>

                    <div className="full-width">
                        <input
                            type="password"
                            id="currentPassword"
                            name="currentPassword"
                            placeholder='Current Password'
                            value={currentPassword}
                            onChange={(e) => setCurrentPassword(e.target.value)}
                        />
                    </div>

                    <div className="full-width">
                        <input
                            type="password"
                            id="newPassword"
                            name="newPassword"
                            placeholder='New Password'
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                        />
                    </div>

                    <div className="full-width">
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            placeholder='Confirm New Password'
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>

                    {errors && <div className="error-msg full-width">{errors}</div>}

                    <div className="button-group">
                        <button type="button" className="cancel-btn">Cancel</button>
                        <button type="submit" className="save-btn">Save Changes</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditProfile