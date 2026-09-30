function Field({
  label,
  name,
  value,
  onChange,
  error,
  type = "text",
  placeholder
}) {
  return (
    <div className="form-field">

      <label htmlFor={name}>
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        aria-invalid={Boolean(error)}
        aria-describedby={
          error
            ? `${name}-error`
            : undefined
        }
      />

      {error && (
        <small
          id={`${name}-error`}
          className="field-error"
        >
          {error}
        </small>
      )}

    </div>
  );
}

export default Field;