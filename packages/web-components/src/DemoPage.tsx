import DemoPage from "@aon/data-components/src/payments/page";
import r2wc from "@r2wc/react-to-web-component";

const DemoPageForWebComponent: React.FC<
  React.ComponentProps<typeof DemoPage>
> = () => {
  return <DemoPage />;
};

const DemoPageWebComponent = r2wc(DemoPageForWebComponent, {
  props: { rule: "json" },
});

customElements.define("demo-page", DemoPageWebComponent);
