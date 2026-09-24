# Bell state lab sheet

Install `requirements.txt` (`qiskit>=2.3.0,<2.4.0`) in a virtual environment. The notebook is `notebooks/bell_state_lab.ipynb`.

Do not put an API token in the notebook. This lab uses the local `StatevectorSampler`.

## Unmeasured circuit

```python
from qiskit import QuantumCircuit
from qiskit.quantum_info import Statevector

bell_circuit = QuantumCircuit(2)

bell_circuit.h(0)
bell_circuit.cx(0, 1)

state = Statevector.from_instruction(bell_circuit)

print(state)
bell_circuit.draw("mpl")
```

## Measure and sample

```python
from qiskit.primitives import StatevectorSampler

measured_circuit = bell_circuit.copy()
measured_circuit.measure_all()

sampler = StatevectorSampler()
job = sampler.run([measured_circuit], shots=1024)
result = job.result()

counts = result[0].data.meas.get_counts()

print(counts)
```

Qiskit prints qubit 0 as the rightmost bit.

Ideal counts pile up on `00` and `11`. That histogram is consistent with the Bell state. It is not a complete proof of entanglement.
