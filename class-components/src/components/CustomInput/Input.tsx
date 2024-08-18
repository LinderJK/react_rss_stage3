import styles from './styles.module.css';
import { AutoCompleteInputProps, SelectInputProps } from '../../types/input.ts';
import { InputPropsWithRegister } from '../../types/forms.ts';

export default function Input(props: InputPropsWithRegister) {
    const {
        name,
        label,
        disabled = false,
        type,
        autocomplete = 'off',
        placeholder,
        error,
        register,
    } = props;

    const registerProps = register ? register(name) : {};

    const inputProps = {
        name,
        disabled,
        placeholder,
        autoComplete: autocomplete,
        id: name,
        className: styles.myInput,
        type: type,
        ...registerProps,
    };

    if (type === 'select') {
        return (
            <div className={styles.container}>
                <label className={styles.myLabel} htmlFor={name}>
                    {label}
                </label>
                <select {...inputProps}>
                    {(props as SelectInputProps).options.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
                <span className={styles.myError}>{error}</span>
            </div>
        );
    }

    if (type === 'autocomplete') {
        return (
            <div className={styles.container}>
                <label className={styles.myLabel} htmlFor={name}>
                    {label}
                </label>
                <input
                    list={`${name}-options`}
                    {...inputProps}
                    defaultValue={(props as AutoCompleteInputProps).value}
                />
                <datalist id={`${name}-options`}>
                    {(props as AutoCompleteInputProps).options.map((option) => (
                        <option key={option} value={option} />
                    ))}
                </datalist>
                <span className={styles.myError}>{error}</span>
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <label className={styles.myLabel} htmlFor={name}>
                {label}
            </label>
            <input {...inputProps} />
            <span className={styles.myError}>{error}</span>
        </div>
    );
}
