export class NavItem {
    public label: string;
    public value: string;
    public index: number;
}

export const navItems: NavItem[] = [
    { label: 'Income', value: 'income', index: 0 },
    { label: 'Outcome', value: 'outcome', index: 1 },
    { label: 'Loans', value: 'loan', index: 2 },
    { label: 'Investments', value: 'investment', index: 3 },
]

export class DataItem  {

    type: string;

    _id: string;

    amount: number;

    name: {

    first: string;

    last: string;
    };

    company: string;

    email: string;

    phone: string;

    address: string;

}


