import { render } from '@testing-library/react';
import Student from './Student';

test("Render with correct props for Student Details", () => {
    const props = { name: "Anuka Mithara", eNumber: "2019e054@eng.jfn.ac.lk", year: 3 };
    const { getByText } = render(<Student {...props} />);
    expect(getByText(`Name: ${props.name}`)).toBeInTheDocument();
    expect(getByText(`E number: ${props.eNumber}`)).toBeInTheDocument();
    expect(getByText(`Year: ${props.year}`)).toBeInTheDocument();
});


