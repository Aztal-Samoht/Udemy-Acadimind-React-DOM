function StatRow(props) {
  function calcMod(score) {
    if (score > 10) {
      return Math.ceil((score - 11) / 2);
    }
    return Math.floor((score - 10) / 2);
  }
  return (
    <table>
      <tr>
        <td>{props.stat}</td>
        <td>{props.score}</td>
        <td>{calcMod(props.score)}</td>
      </tr>
    </table>
  );
}
export default StatRow;
