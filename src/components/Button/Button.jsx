import './style.scss';
function Button(props){
    const variant = {
        'default': 'btn',
        'primary': 'btn-primary',
        'success': 'btn-success',
        'warning': 'btn-warning',
        'danger': 'btn-danger',
    };
    let classes = variant[props.variant ? props.variant : 'default'];
    if(props.radius)
        classes += ' btn-radius';
    return (
        <button className={classes}>{props.label && props.label}</button>
    )
}

export default Button;