export const CONNECT_SAVE = `from qiskit_ibm_runtime import QiskitRuntimeService

QiskitRuntimeService.save_account(
    token="<YOUR_PRIVATE_API_KEY>",
    instance="<YOUR_CLASSROOM_INSTANCE_CRN>",
    name="fall-fest-classroom",
    set_as_default=True,
    overwrite=True
)`;

export const CONNECT_LOAD = `from qiskit_ibm_runtime import QiskitRuntimeService

service = QiskitRuntimeService(name="fall-fest-classroom")`;

export const CONNECT_CHECK = `from qiskit_ibm_runtime import QiskitRuntimeService

try:
    service = QiskitRuntimeService(name="fall-fest-classroom")
    names = service.backends()
    print("Connected: You are ready for the lab.")
    print("Resource count:", len(names))
except Exception as error:
    print("Action needed: Check your account, region, instance, or API key.")
    print(type(error).__name__)`;

export const SAVE_WORDS: { word: string; meaning: string }[] = [
  { word: "from", meaning: "Names the module that holds the class." },
  { word: "import", meaning: "Loads QiskitRuntimeService into this notebook." },
  { word: "QiskitRuntimeService", meaning: "The class that talks to IBM Quantum Compute. For this credential step, the analogy is a service desk." },
  { word: "save_account", meaning: "A method that writes credentials into a file on this computer, $HOME/.qiskit/qiskit-ibm.json." },
  { word: "token", meaning: "The API key. It is a private credential. It is not your password." },
  { word: "instance", meaning: "The assigned classroom workspace, passed as that workspace’s CRN. Keep the CRN off the form, out of chat, and out of git." },
  { word: "name", meaning: "The local label fall-fest-classroom. Later notebooks load this label." },
  { word: "set_as_default", meaning: "True stores this account as the default saved account on this computer." },
  { word: "overwrite", meaning: "True replaces credentials already saved under this setup. IBM’s save-credentials page uses this when you update a saved account." },
  { word: "True", meaning: "The Python value for yes. Both set_as_default and overwrite receive it here." },
];

export const RESOURCE_ANALOGY: { concept: string; analogy: string }[] = [
  { concept: "Platform", analogy: "The store" },
  { concept: "Classroom Account", analogy: "The school’s contractor account" },
  { concept: "Instance", analogy: "Assigned project workspace" },
  { concept: "CRN", analogy: "Unique address" },
  { concept: "QPU access", analogy: "Equipment available for the project" },
];

export const CREDENTIAL_ANALOGY =
  "QiskitRuntimeService is the service desk. save_account() registers project access on this computer. token is the private credential. instance is the assigned workspace. name is the local label. The analogy ends here. It does not reduce the security importance of the API key.";
