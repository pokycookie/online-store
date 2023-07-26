interface ITableData {
  head: string
  data: string[]
}

interface IProps {
  content: ITableData[]
}

export default function Table({ content }: IProps) {
  return (
    <table className="w-full p-2 border rounded-sm">
      <tbody className="divide-y">
        {content.map((e, i) => {
          return (
            <tr key={i}>
              <th className="w-0 p-3 pr-12 text-xs font-semibold text-left bg-gray-100 whitespace-nowrap">
                {e.head}
              </th>
              <td className="p-3 text-xs">
                <ul>
                  {e.data.map((e, i) => {
                    return <li key={i}>{e}</li>
                  })}
                </ul>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
