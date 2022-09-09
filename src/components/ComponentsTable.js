import Box from "@awsui/components-react/box";
import Header from "@awsui/components-react/header";
import Table from "@awsui/components-react/table";
import TextFilter from "@awsui/components-react/text-filter";

function ComponentsTable() {
  document.title = "Components Table - awsui-react-template";

  return (
    <Table
      header={<Header>Components Table</Header>}
      columnDefinitions={[
        {
          id: "name",
          header: "Name",
          cell: item => item.name
        },
        {
          id: "description",
          header: "Description",
          cell: item => item.description
        }
      ]}
      items={[]}
      loadingText="Loading Components..."
      empty={
        <Box textAlign="center" color="inherit">
          <b>No components</b>
          <Box
            padding={{ bottom: "s" }}
            variant="p"
            color="inherit"
          >
            No components to display.
          </Box>
        </Box>
      }
      filter={
        <TextFilter
          filteringPlaceholder="Find components"
          filteringText=""
        />
      }
    />
  );
}

export default ComponentsTable;