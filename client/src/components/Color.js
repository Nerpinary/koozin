export default function Color(variant) {

    function click() {
        console.log('Click')
    }

    return (
        <li className={`color ${variant}`}>
            {/* eslint-disable-next-line react/style-prop-object */}
            <button style='background: transparent; width: 100%; height: 100%' onClick={click} />
        </li>
    )
}