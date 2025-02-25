export function importObserver (setParent: (element: HTMLElement) => void): void {
  const body = window.document.querySelector('body');

  if (!body) {
    return;
  }

  const mutationObserver = new MutationObserver(mutations => {
    let importBtn: HTMLElement;

    mutations.forEach(function (mutation: MutationRecord) {

      if (mutation.target.nodeName !== 'BODY' && mutation.target.nodeName !== 'DIV') {
        return;
      }

      const importNode = document.getElementsByName('import');

      if (importNode.length) {
        const btn = importNode[0];

        if (!btn) {
          return;
        }

        // скрываем штатную кнопку
        btn.style.setProperty('pointer-events', 'none');
        btn.style.setProperty('visibility', 'hidden');

        if (!btn) {
          return;
        }

        importBtn = btn;
      }

      if (importBtn) {
        setParent(importBtn);
        mutationObserver.disconnect();
      }
    });
  });

  mutationObserver.observe(body, {
    attributes: false,
    characterData: false,
    childList: true,
    subtree: true,
    attributeOldValue: false,
    characterDataOldValue: false
  });
}