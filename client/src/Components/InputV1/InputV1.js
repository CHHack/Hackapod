import './InputV1.scss';

export default function InputV1(props) {
    return (
        <div className="input-v1">
            <div className="input-container">
                <div className="input-title">{props.title}</div>
                {props.type === "textarea" ? <textarea
                    className="input area"
                    onChange={e => props.setValue(e.target.value)}
                    value={props.inputValue}
                    placeholder={props.placeholder}
                />
                :
                <input
                    type="text"
                    className="input"
                    onChange={e => props.setValue(e.target.value)}
                    value={props.inputValue}
                    placeholder={props.placeholder}
                />}
            </div>
        </div>
    );
}
