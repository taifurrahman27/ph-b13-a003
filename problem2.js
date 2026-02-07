function validOtp(otp) {
    if (typeof otp !== 'string') {
        return 'Invalid';
    }

    if ((otp.length !== 8) || (!otp.startsWith('ph-'))) {
        return false;
    }

    return true;
}

const otp = "ph-10985"
console.log(validOtp(otp));