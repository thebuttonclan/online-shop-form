import HrefLink from 'components/HrefLink';

export default function GrantProposalDescription() {
  return (
    <>
      Please provide a grant proposal on how you plan to use the grant funds. Please refer to eligible expenses, online
      shops completion checklist and grant limit information in the{' '}
      <HrefLink href="/files/program_guide.pdf" blank>
        Program Guide
      </HrefLink>
      .
      <p>
        The estimated total costs for service provide costs, digital marketing and training will be entered on the next
        page of this application.
      </p>
    </>
  );
}
