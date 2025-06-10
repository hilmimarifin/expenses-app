import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

type Props = {
  title: string;
  total: string | number;
  description?: string;
  children: React.ReactNode;
}

const InputSection = (props: Props) => {
  return (
    <Card className="@container/card">
    <CardHeader>
      <CardTitle className='text-center'>{props.title}</CardTitle>
      <CardContent>
        {props.children}
      </CardContent>
    </CardHeader>
  </Card>
  )
}

export default InputSection