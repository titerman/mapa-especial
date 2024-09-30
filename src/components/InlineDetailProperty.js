export default function InlineDetailProperty({ translation, iterator, orgArray }) {
    const keyValue = iterator + Math.random();
    return (
        <li className='inlineProperty' key={iterator}>{translation}{iterator < orgArray.length - 1 && <span key={keyValue}>,&nbsp;</span>}
        </li>
    )
}