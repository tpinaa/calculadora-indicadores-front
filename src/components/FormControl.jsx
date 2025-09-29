function FormControl ({label, id, type, value, onChange, placeholder, min, step, required}) {
    return (
        <div className="mb-3">
            <label htmlFor={id} className="form-label">{label}</label>
            <input
                type={type}
                className="form-control"
                id={id}
                name={id}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                min={min}
                step={step}
                required={required}
            />
        </div>
    );
}

export default FormControl;