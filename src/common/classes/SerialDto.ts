interface ISerialDto {
    serialNumber: number;
    status: boolean;
}

export class SerialDto implements ISerialDto {
    public static emptyInit = () => {
        return new SerialDto(-1, false);
    };

    public serialNumber: number;
    public status: boolean;

    constructor(serialNumber: number, status: boolean) {
        this.serialNumber = serialNumber;
        this.status = status;
    }
}