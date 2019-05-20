import bcrypt from 'bcrypt';

export const hashPassword = (plainPassword: string, next: CallableFunction) => {
	bcrypt.genSalt(10, (err, salt) => {
        if (err) return next(err);

        // Hash password
        bcrypt.hash(plainPassword, salt, (error, hashedPassword: string) => {
            if (error) return next(error);
            next(null, hashedPassword);
        });
    });
};