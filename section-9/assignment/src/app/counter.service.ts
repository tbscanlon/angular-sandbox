export class CounterService {
    private activations = 0;
    private deactivations = 0;

    public incrementActivations() {
        return this.activations += 1;
    }

    public incrementDeactivations() {
        return this.deactivations += 1;
    }
}
