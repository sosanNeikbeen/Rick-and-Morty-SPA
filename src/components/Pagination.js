import React from "react";
import { Grid, Pagination, Container } from "semantic-ui-react";

const CustomPagination = ({
  activePage,
  boundaryRange,
  siblingRange,
  showEllipsis,
  showFirstAndLastNav,
  showPreviousAndNextNav,
  totalPages,
  handlePaginationChange,
}) => {
  return (
    <Container>
      <Grid>
        <Grid.Column textAlign="center">
          <Pagination
            activePage={activePage}
            boundaryRange={boundaryRange}
            onPageChange={handlePaginationChange}
            size="mini"
            siblingRange={siblingRange}
            totalPages={totalPages}
            ellipsisItem={showEllipsis ? undefined : null}
            firstItem={showFirstAndLastNav ? undefined : null}
            lastItem={showFirstAndLastNav ? undefined : null}
            prevItem={showPreviousAndNextNav ? undefined : null}
            nextItem={showPreviousAndNextNav ? undefined : null}
          />
        </Grid.Column>
      </Grid>
    </Container>
  );
};
export default CustomPagination;
