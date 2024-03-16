export interface Product{
    name: string;
    //seller?
    condition: Condition;
    location: Location;
    paymentOptions: [string];
    price: number;
    description: string;
    images: [string];
    created_at: Date;
}