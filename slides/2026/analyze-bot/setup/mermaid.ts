export default function setupMermaid() {
  return {
    flowchart: {
      useMaxWidth: true,
      htmlLabels: false,
      nodeSpacing: 120,
      rankSpacing: 120,
      padding: 16,
    },
    themeVariables: {
      fontSize: '32px',
    },
  }
}
